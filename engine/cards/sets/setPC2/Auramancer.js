"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuramancerBase = require("../setDDL/Auramancer.js");

class Auramancer extends AuramancerBase {
  constructor(game) {
    super(game, "Auramancer", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Auramancer;
