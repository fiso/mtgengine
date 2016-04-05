"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalEyeKondasYojimbo extends UnimplementedCard {
  constructor(game) {
    super(game, "Opal-Eye, Konda's Yojimbo", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OpalEyeKondasYojimbo;
