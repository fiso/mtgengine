"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireAmbushBase = require("../setME3/FireAmbush.js");

class FireAmbush extends FireAmbushBase {
  constructor(game) {
    super(game, "Fire Ambush", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FireAmbush;
