"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathgripBase = require("../setCED/Deathgrip.js");

class Deathgrip extends DeathgripBase {
  constructor(game) {
    super(game, "Deathgrip", "Unlimited Edition", "2ED");
  }
}

module.exports = Deathgrip;
