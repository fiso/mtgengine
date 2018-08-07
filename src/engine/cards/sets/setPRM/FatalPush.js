"use strict";
const Constants = require ("../../../Constants");
const FatalPushBase = require("../setAER/FatalPush");

class FatalPush extends FatalPushBase {
  constructor (game) {
    super(game, "Fatal Push", "Magic Online Promos", "PRM");
  }
}

module.exports = FatalPush;
