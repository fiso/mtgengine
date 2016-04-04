"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshalingtheTroops extends Card {
  constructor(game) {
    super(game, "Marshaling the Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MarshalingtheTroops;
