"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireServantBase = require("../setM11/FireServant.js");

class FireServant extends FireServantBase {
  constructor(game) {
    super(game, "Fire Servant", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = FireServant;
