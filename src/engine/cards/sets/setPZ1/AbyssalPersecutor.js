"use strict";
const Constants = require ("../../../Constants");
const AbyssalPersecutorBase = require("../setIMA/AbyssalPersecutor");

class AbyssalPersecutor extends AbyssalPersecutorBase {
  constructor (game) {
    super(game, "Abyssal Persecutor", "Legendary Cube", "PZ1");
  }
}

module.exports = AbyssalPersecutor;
