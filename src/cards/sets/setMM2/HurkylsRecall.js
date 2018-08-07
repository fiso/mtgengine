"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HurkylsRecall extends UnimplementedCard {
  constructor (game) {
    super(game, "Hurkyl's Recall", "Modern Masters 2015", "MM2");
  }
}

module.exports = HurkylsRecall;
