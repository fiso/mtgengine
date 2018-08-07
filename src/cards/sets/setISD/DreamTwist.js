"use strict";
const Constants = require ("../../../Constants");
const DreamTwistBase = require("../setEMA/DreamTwist");

class DreamTwist extends DreamTwistBase {
  constructor (game) {
    super(game, "Dream Twist", "Innistrad", "ISD");
  }
}

module.exports = DreamTwist;
