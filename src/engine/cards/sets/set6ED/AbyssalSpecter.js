"use strict";
const Constants = require ("../../../Constants");
const AbyssalSpecterBase = require("../setMM3/AbyssalSpecter");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor (game) {
    super(game, "Abyssal Specter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AbyssalSpecter;
