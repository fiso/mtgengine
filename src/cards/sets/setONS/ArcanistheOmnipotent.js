"use strict";
const Constants = require ("../../../Constants");
const ArcanistheOmnipotentBase = require("../setDDN/ArcanistheOmnipotent");

class ArcanistheOmnipotent extends ArcanistheOmnipotentBase {
  constructor(game) {
    super(game, "Arcanis the Omnipotent", "Onslaught", "ONS");
  }
}

module.exports = ArcanistheOmnipotent;
