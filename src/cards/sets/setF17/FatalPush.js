"use strict";
const Constants = require ("../../../Constants");
const FatalPushBase = require("../setAER/FatalPush");

class FatalPush extends FatalPushBase {
  constructor (game) {
    super(game, "Fatal Push", "Friday Night Magic 2017", "F17");
  }
}

module.exports = FatalPush;
