"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setDDL/Auramancer");

class Auramancer extends AuramancerBase {
  constructor (game) {
    super(game, "Auramancer", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Auramancer;
