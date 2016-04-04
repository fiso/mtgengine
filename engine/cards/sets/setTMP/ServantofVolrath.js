"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ServantofVolrath extends Card {
  constructor(game) {
    super(game, "Servant of Volrath", "Tempest", "TMP");
  }
}

module.exports = ServantofVolrath;
