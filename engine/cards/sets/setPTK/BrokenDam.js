"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrokenDam extends Card {
  constructor(game) {
    super(game, "Broken Dam", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BrokenDam;
