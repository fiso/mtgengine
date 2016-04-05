"use strict";
const Constants = require ("../../../Constants");
const ArcanistheOmnipotentBase = require("../setDDN/ArcanistheOmnipotent");

class ArcanistheOmnipotent extends ArcanistheOmnipotentBase {
  constructor(game) {
    super(game, "Arcanis the Omnipotent", "Tenth Edition", "10E");
  }
}

module.exports = ArcanistheOmnipotent;
