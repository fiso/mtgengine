"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TornadoBase = require("../setALL/Tornado.js");

class Tornado extends TornadoBase {
  constructor(game) {
    super(game, "Tornado", "Masters Edition", "MED");
  }
}

module.exports = Tornado;
