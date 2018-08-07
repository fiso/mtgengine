"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesPhantasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Phantasm", "Iconic Masters", "IMA");
  }
}

module.exports = JacesPhantasm;
