"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HurkylsRecall extends UnimplementedCard {
  constructor(game) {
    super(game, "Hurkyl's Recall", "Antiquities", "ATQ");
  }
}

module.exports = HurkylsRecall;
