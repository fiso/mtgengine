"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setDDL/Auramancer");

class Auramancer extends AuramancerBase {
  constructor (game) {
    super(game, "Auramancer", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Auramancer;
