"use strict";
const Constants = require ("../../../Constants");
const GlimmerpointStagBase = require("../setEMA/GlimmerpointStag");

class GlimmerpointStag extends GlimmerpointStagBase {
  constructor (game) {
    super(game, "Glimmerpoint Stag", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GlimmerpointStag;
