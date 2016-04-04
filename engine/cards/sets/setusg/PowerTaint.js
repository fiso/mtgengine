"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerTaint extends Card {
  constructor(game) {
    super(game, "Power Taint", "Urza's Saga", "USG");
  }
}

module.exports = PowerTaint;
