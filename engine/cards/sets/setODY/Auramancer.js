"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setDDL/Auramancer");

class Auramancer extends AuramancerBase {
  constructor(game) {
    super(game, "Auramancer", "Odyssey", "ODY");
  }
}

module.exports = Auramancer;
