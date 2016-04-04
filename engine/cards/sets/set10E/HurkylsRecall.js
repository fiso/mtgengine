"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HurkylsRecallBase = require("../setATQ/HurkylsRecall.js");

class HurkylsRecall extends HurkylsRecallBase {
  constructor(game) {
    super(game, "Hurkyl's Recall", "Tenth Edition", "10E");
  }
}

module.exports = HurkylsRecall;
