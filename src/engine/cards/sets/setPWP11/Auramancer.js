"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setA25/Auramancer");

class Auramancer extends AuramancerBase {
  constructor (game) {
    super(game, "Auramancer", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = Auramancer;
