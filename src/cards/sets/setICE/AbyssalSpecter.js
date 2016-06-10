"use strict";
const Constants = require ("../../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor (game) {
    super(game, "Abyssal Specter", "Ice Age", "ICE");
  }
}

module.exports = AbyssalSpecter;
