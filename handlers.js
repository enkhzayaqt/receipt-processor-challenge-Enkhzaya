const { v4: uuid4 } = require("uuid");
const { calculatePoints } = require("./models");

const processReceipt = (req, res, db) => {
  const receipt = req.body;
  const id = uuid4();
  db[id] = receipt;
  res.json({ id });
};

const getPoints = (req, res, db) => {
  const { id } = req.params;
  const receipt = db[id];

  if (!receipt) {
    return res.status(404).send("Receipt not found");
  }
  const points = calculatePoints(receipt);

  return res.json({ points });
};

module.exports = { processReceipt, getPoints };
