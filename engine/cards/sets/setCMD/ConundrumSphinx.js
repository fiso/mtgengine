"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConundrumSphinxBase = require("../setM11/ConundrumSphinx.js");

class ConundrumSphinx extends ConundrumSphinxBase {
  constructor(game) {
    super(game, "Conundrum Sphinx", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ConundrumSphinx;
