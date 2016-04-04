"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivewireLash extends Card {
  constructor(game) {
    super(game, "Livewire Lash", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LivewireLash;
