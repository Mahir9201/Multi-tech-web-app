import json
import os
import pandas as pd
import matplotlib.pyplot as plt

# Function to perform a simple multiplication
def multiply(a, b):
    return a * b

# Function to read JSON data and analyze it
def read_json(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist.")
        return

    with open(file_path, 'r') as file:
        data = json.load(file)
        print("Task Analysis Result:")
        for task in data['tasks']:
            print(f"Task ID: {task['id']}, Task Name: {task['name']}, Status: {task['status']}")
        return data

# Function to create a DataFrame from JSON data
def create_dataframe(data):
    df = pd.DataFrame(data['tasks'])
    return df

# Function to plot task statuses
def plot_task_statuses(df):
    status_counts = df['status'].value_counts()
    status_counts.plot(kind='bar', color=['green', 'red', 'blue'])
    plt.title('Task Status Counts')
    plt.xlabel('Status')
    plt.ylabel('Count')
    plt.show()

# Sample multiplication
result = multiply(7, 8)
print(f"Multiplication of 7 and 8 is: {result}\n")

# Read JSON data
data = read_json('analysis_result.json')

if data:
    # Create DataFrame and plot
    df = create_dataframe(data)
    plot_task_statuses(df)
