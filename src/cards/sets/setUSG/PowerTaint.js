"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerTaint extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Taint", "Urza's Saga", "USG");
  }
}

module.exports = PowerTaint;
