"use strict";
const Constants = require ("../../../Constants");
const AbyssalPersecutorBase = require("../setIMA/AbyssalPersecutor");

class AbyssalPersecutor extends AbyssalPersecutorBase {
  constructor (game) {
    super(game, "Abyssal Persecutor", "Commander 2014", "C14");
  }
}

module.exports = AbyssalPersecutor;
