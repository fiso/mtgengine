"use strict";
const Constants = require ("../../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor (game) {
    super(game, "Abyssal Specter", "Fifth Edition", "5ED");
  }
}

module.exports = AbyssalSpecter;
