"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivewireLash extends UnimplementedCard {
  constructor(game) {
    super(game, "Livewire Lash", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LivewireLash;
