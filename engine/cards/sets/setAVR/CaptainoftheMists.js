"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptainoftheMists extends Card {
  constructor(game) {
    super(game, "Captain of the Mists", "Avacyn Restored", "AVR");
  }
}

module.exports = CaptainoftheMists;
