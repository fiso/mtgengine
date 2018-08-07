"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setA25/Auramancer");

class Auramancer extends AuramancerBase {
  constructor (game) {
    super(game, "Auramancer", "Magic Origins", "ORI");
  }
}

module.exports = Auramancer;
