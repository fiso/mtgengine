"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorialtoUnity extends UnimplementedCard {
  constructor (game) {
    super(game, "Memorial to Unity", "Dominaria", "DOM");
  }
}

module.exports = MemorialtoUnity;
