"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcanistheOmnipotentBase = require("../setDDN/ArcanistheOmnipotent.js");

class ArcanistheOmnipotent extends ArcanistheOmnipotentBase {
  constructor(game) {
    super(game, "Arcanis the Omnipotent", "Onslaught", "ONS");
  }
}

module.exports = ArcanistheOmnipotent;
