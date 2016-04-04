"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RunedServitorBase = require("../setDDF/RunedServitor.js");

class RunedServitor extends RunedServitorBase {
  constructor(game) {
    super(game, "Runed Servitor", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RunedServitor;
