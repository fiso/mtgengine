"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HurkylsRecall extends Card {
  constructor(game) {
    super(game, "Hurkyl's Recall", "Antiquities", "ATQ");
  }
}

module.exports = HurkylsRecall;
