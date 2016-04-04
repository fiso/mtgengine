"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetSignetBase = require("../setC15/IzzetSignet.js");

class IzzetSignet extends IzzetSignetBase {
  constructor(game) {
    super(game, "Izzet Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = IzzetSignet;
