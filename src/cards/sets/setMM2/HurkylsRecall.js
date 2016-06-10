"use strict";
const Constants = require ("../../../Constants");
const HurkylsRecallBase = require("../setATQ/HurkylsRecall");

class HurkylsRecall extends HurkylsRecallBase {
  constructor (game) {
    super(game, "Hurkyl's Recall", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HurkylsRecall;
