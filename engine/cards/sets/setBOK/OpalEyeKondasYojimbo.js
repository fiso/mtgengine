"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalEyeKondasYojimbo extends Card {
  constructor(game) {
    super(game, "Opal-Eye, Konda's Yojimbo", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OpalEyeKondasYojimbo;
