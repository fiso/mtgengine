"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CeruleanSphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Cerulean Sphinx", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CeruleanSphinx;
