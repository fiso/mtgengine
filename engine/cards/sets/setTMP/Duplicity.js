"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Duplicity extends Card {
  constructor(game) {
    super(game, "Duplicity", "Tempest", "TMP");
  }
}

module.exports = Duplicity;
