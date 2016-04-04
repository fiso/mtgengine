"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlimmerpointStagBase = require("../setCNS/GlimmerpointStag.js");

class GlimmerpointStag extends GlimmerpointStagBase {
  constructor(game) {
    super(game, "Glimmerpoint Stag", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GlimmerpointStag;
