start:
	@echo "to start application run 'make run'"
run:
	@echo "starting application..."
	@docker compose down
	@docker compose up --build
