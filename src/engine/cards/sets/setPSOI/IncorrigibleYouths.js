"use strict";
const Constants = require ("../../../Constants");
const IncorrigibleYouthsBase = require("../setSOI/IncorrigibleYouths");

class IncorrigibleYouths extends IncorrigibleYouthsBase {
  constructor (game) {
    super(game, "Incorrigible Youths", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = IncorrigibleYouths;
