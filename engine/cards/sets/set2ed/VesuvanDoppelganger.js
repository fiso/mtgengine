"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VesuvanDoppelgangerBase = require("../setCED/VesuvanDoppelganger.js");

class VesuvanDoppelganger extends VesuvanDoppelgangerBase {
  constructor(game) {
    super(game, "Vesuvan Doppelganger", "Unlimited Edition", "2ED");
  }
}

module.exports = VesuvanDoppelganger;
