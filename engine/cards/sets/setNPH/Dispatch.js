"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DispatchBase = require("../setMM2/Dispatch.js");

class Dispatch extends DispatchBase {
  constructor(game) {
    super(game, "Dispatch", "New Phyrexia", "NPH");
  }
}

module.exports = Dispatch;
