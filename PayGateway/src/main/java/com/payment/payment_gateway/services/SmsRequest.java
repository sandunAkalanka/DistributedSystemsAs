package com.payment.payment_gateway.services;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SmsRequest {
	
	@NotBlank
	private final String phoneNumber;
	
	@NotBlank
	private final String message;

	public SmsRequest(@JsonProperty(value = "phoneNumber") String phoneNumber,
			@JsonProperty(value = "message") String message) {
		this.phoneNumber = phoneNumber;
		this.message = message;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public String getMessage() {
		return message;
	}

	@Override
	public String toString() {
		return "SmsRequest [phoneNumber=" + phoneNumber + ", message=" + message + "]";
	}

}
