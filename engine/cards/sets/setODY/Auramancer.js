"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuramancerBase = require("../setDDL/Auramancer.js");

class Auramancer extends AuramancerBase {
  constructor(game) {
    super(game, "Auramancer", "Odyssey", "ODY");
  }
}

module.exports = Auramancer;
