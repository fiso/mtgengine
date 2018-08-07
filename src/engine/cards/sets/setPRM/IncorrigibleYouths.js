"use strict";
const Constants = require ("../../../Constants");
const IncorrigibleYouthsBase = require("../setSOI/IncorrigibleYouths");

class IncorrigibleYouths extends IncorrigibleYouthsBase {
  constructor (game) {
    super(game, "Incorrigible Youths", "Magic Online Promos", "PRM");
  }
}

module.exports = IncorrigibleYouths;
