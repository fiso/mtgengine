"use strict";
const Constants = require ("../../../Constants");
const HurkylsRecallBase = require("../setATQ/HurkylsRecall");

class HurkylsRecall extends HurkylsRecallBase {
  constructor(game) {
    super(game, "Hurkyl's Recall", "Fifth Edition", "5ED");
  }
}

module.exports = HurkylsRecall;
